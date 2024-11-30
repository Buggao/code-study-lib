import { FC } from 'react'
import { useRouteError, ErrorResponse } from 'react-router-dom'

const ErrorPage: FC = () => {
  const error = useRouteError() as ErrorResponse & Error

  return (
    <div id="error-page">
      <h1>啊噢!</h1>
      <p>不好意思，有些匹配错误。</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage
