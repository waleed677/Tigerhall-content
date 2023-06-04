import { Alert } from "@chakra-ui/react";
import React from "react";

interface propsAlertError {
  message: string;
}

const ErrorAlert = ({ message }: propsAlertError) => {
  return (
    <Alert mt={10} status="error" borderRadius={2} textAlign="center">
      {message}
    </Alert>
  );
};

export default ErrorAlert;
