import React from "react"
import { useForm, Controller } from "react-hook-form"
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  Typography,
  Checkbox,
  Input,
} from "@mui/material"

export default function LoginForm() {
  const { handleSubmit, control } = useForm()
  const onSubmit = (data) => console.log(data)

  return <form onSubmit={handleSubmit(onSubmit)}>
    <Controller
      name="userName"
      control={control}
      defaultValue=""
      render={({ field }) => <Input {...field} />}
    />
    <Controller
      name="password"
      control={control}
      defaultValue=""
      render={({ password }) => <Input {...password} />}
    />

  </form>
}
