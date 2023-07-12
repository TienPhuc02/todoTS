import { Row, Col } from "antd";
import { Checkbox } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { Todo } from "../../@types/todo.type";

interface TaskListProps {
  doneTaskList?: boolean;
  doneTodos: Todo[];
  setDoneTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  notDoneTodos: Todo[];
  stateTask: boolean | undefined;
  setStateTask: React.Dispatch<React.SetStateAction<boolean>>;
  setNotDoneTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setId: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  handleDeleteDoneTodos: (id: string) => void;
}

const Index = (props: TaskListProps) => {
  const {
    doneTodos,
    setDoneTodos,
    notDoneTodos,
    setNotDoneTodos,
    setId,
    setName,
    handleDeleteDoneTodos,
  } = props;

  const onChange = (e: CheckboxChangeEvent, item: Todo) => {
    const checked = e.target.checked;
    console.log("check true", checked);
    if (checked === false) {
      const updatedDoneTodos = doneTodos.filter((todo) => todo.id !== item.id);
      setDoneTodos(updatedDoneTodos);
      const updatedItem = { ...item, done: false };
      const updatedNotDoneTodos = [...notDoneTodos, updatedItem];
      setNotDoneTodos(updatedNotDoneTodos);
    }
  };
  return (
    <div>
      {doneTodos &&
        doneTodos.length > 0 &&
        doneTodos.map((item) => (
          <div key={item.id}>
            <Row>
              <Col
                span={24}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Checkbox
                  checked={item.done}
                  onChange={(e) => onChange(e, item)}
                  style={{
                    textDecoration: item.done ? "line-through" : "none",
                  }}
                >
                  {item.name}
                </Checkbox>
                <span>
                  <EditOutlined
                    onClick={() => {
                      setId(item.id);
                      setName(item.name);
                    }}
                  />
                  <DeleteOutlined
                    onClick={() => handleDeleteDoneTodos(item.id)}
                  />
                </span>
              </Col>
            </Row>
          </div>
        ))}
    </div>
  );
};

export default Index;
