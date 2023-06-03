import { Alert } from "@chakra-ui/react";
import React from "react";

interface propsAlertError {
  message: string;
}

const ErrorAlert = ({ message }: propsAlertError) => {
  return (
    <Alert mt={10} status="error">
      {message}
    </Alert>
  );
};

export default ErrorAlert;
