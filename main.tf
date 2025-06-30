resource "aws_lambda_function" "recommendation_service" {
  function_name = "ms_recomendation_service"
  handler       = "index.handler" # Mismo handler que catalog
  runtime       = "nodejs18.x"   # Mismo runtime
  filename      = "${path.module}/deploy/ms_recomendation_service.zip"
  role          = aws_iam_role.lambda_exec.arn

  environment {
    variables = {
      LOG_PATH = "/var/task/logs" # Misma variable de logs
    }
  }
}