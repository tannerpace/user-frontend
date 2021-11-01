import { createThread, getThreads } from "actions/messages"
import AppContext from "contexts/App"
import { isEmpty } from "lodash"
import PropTypes from "prop-types"
import { createContext, useContext, useState } from "react"
import { useMutation, useQuery } from "react-query"

const MessagesContext = createContext()
export default MessagesContext

export const MessagesContainer = ({ children }) => {
    const { authUser, isClerk, isAdmin, isSuperAdmin } = useContext(AppContext)
    const [selectedThread, setSelectedThread] = useState(null)

    // Create threads
    const createThreadMutation = useMutation(createThread)

    // Get threads
    // only active if: authUser and if !exclusively a superadmin
    const {
        data: threads,
        isLoading: threadsDataLoading,
        refetch: refetchThreads,
    } = useQuery(["threads", authUser], () => getThreads(isClerk), {
        refetchInterval: 3000,
        enabled: !isEmpty(authUser) && (isAdmin || !isClerk),
    })

    return (
        <MessagesContext.Provider
            value={{
                threads,
                refetchThreads,
                threadsDataLoading,
                selectedThread,
                createThreadMutation,
                setSelectedThread,
            }}
        >
            {children}
        </MessagesContext.Provider>
    )
}

MessagesContainer.propTypes = {
    children: PropTypes.node,
}
