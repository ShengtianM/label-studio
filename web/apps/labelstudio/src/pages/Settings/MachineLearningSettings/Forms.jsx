import { useState } from "react";
import { Button } from "../../../components";
import { ErrorWrapper } from "../../../components/Error/Error";
import { InlineError } from "../../../components/Error/InlineError";
import { Form, Input, Select, TextArea, Toggle } from "../../../components/Form";
import "./MachineLearningSettings.scss";

const CustomBackendForm = ({ action, backend, project, onSubmit }) => {
  const [selectedAuthMethod, setAuthMethod] = useState("NONE");
  const [, setMLError] = useState();

  return (
    <Form
      action={action}
      formData={{ ...(backend ?? {}) }}
      params={{ pk: backend?.id }}
      onSubmit={async (response) => {
        if (!response.error_message) {
          onSubmit(response);
        }
      }}
    >
      <Input type="hidden" name="project" value={project.id} />

      <Form.Row columnCount={1}>
        <Input name="title" label="名称" placeholder="请输入名称" required />
      </Form.Row>

      <Form.Row columnCount={1}>
        <Input name="url" label="后端 URL" required />
      </Form.Row>

      <Form.Row columnCount={2}>
        <Select
          name="auth_method"
          label="认证方式"
          options={[
            { label: "免认证", value: "NONE" },
            { label: "基础认证", value: "BASIC_AUTH" },
          ]}
          value={selectedAuthMethod}
          onChange={setAuthMethod}
        />
      </Form.Row>

      {(backend?.auth_method === "BASIC_AUTH" || selectedAuthMethod === "BASIC_AUTH") && (
        <Form.Row columnCount={2}>
          <Input name="basic_auth_user" label="认证用户" />
          {backend?.basic_auth_pass_is_set ? (
            <Input name="basic_auth_pass" label="认证密码" type="password" placeholder="********" />
          ) : (
            <Input name="basic_auth_pass" label="认证密码" type="password" />
          )}
        </Form.Row>
      )}

      <Form.Row columnCount={1}>
        <TextArea
          name="extra_params"
          label="在模型连接期间要传递的额外参数"
          style={{ minHeight: 120 }}
        />
      </Form.Row>

      <Form.Row columnCount={1}>
        <Toggle
          name="is_interactive"
          label="交互式预标注"
          description="如果启用，部分标注工具将在标注过程中以交互方式向机器学习后端发送请求。"
        />
      </Form.Row>

      <Form.Actions>
        <Button type="submit" look="primary" onClick={() => setMLError(null)}>
          验证并保存
        </Button>
      </Form.Actions>

      <Form.ResponseParser>
        {(response) => (
          <>
            {response.error_message && (
              <ErrorWrapper
                error={{
                  response: {
                    detail: `Failed to ${backend ? "save" : "add new"} ML backend.`,
                    exc_info: response.error_message,
                  },
                }}
              />
            )}
          </>
        )}
      </Form.ResponseParser>

      <InlineError />
    </Form>
  );
};

export { CustomBackendForm };
