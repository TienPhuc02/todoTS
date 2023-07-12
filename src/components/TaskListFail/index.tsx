import { Row, Col } from "antd";
import { Checkbox } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { Todo } from "../../@types/todo.type";

interface NotDoneTaskListProps {
  notDoneTaskList?: boolean;
  stateTask: boolean;
  notDoneTodos: Todo[];
  doneTodos: Todo[];
  setNotDoneTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setDoneTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setStateTask: React.Dispatch<React.SetStateAction<boolean>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setId: React.Dispatch<React.SetStateAction<string>>;
  handleDeleteNotDoneTodos: (id: string) => void;
}

const Index = (props: NotDoneTaskListProps) => {
  const {
    notDoneTodos,
    doneTodos,
    setNotDoneTodos,
    setDoneTodos,
    setName,
    setId,
    handleDeleteNotDoneTodos,
  } = props;

  const onChange = (e: CheckboxChangeEvent, item: Todo) => {
    const checked = e.target.checked;
    console.log("check fail", checked);
    if (checked) {
      const updatedNotDoneTodos = notDoneTodos.filter(
        (todo) => todo.id !== item.id
      );
      setNotDoneTodos(updatedNotDoneTodos);
      const updatedItem = { ...item, done: true };
      const updatedDoneTodos = [...doneTodos, updatedItem];
      setDoneTodos(updatedDoneTodos);
    }
  };

  return (
    <div style={{ maxWidth: "500px" }}>
      {notDoneTodos &&
        notDoneTodos.length > 0 &&
        notDoneTodos.map((item) => {
          return (
            <div key={item.id}>
              <Row>
                <Col
                  span={24}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Checkbox
                    checked={item.done}
                    onChange={(e) => onChange(e, item)}
                  >
                    {item.name}
                  </Checkbox>
                  <span>
                    <EditOutlined
                      onClick={() => {
                        setName(item.name);
                        setId(item.id);
                      }}
                    />
                    <DeleteOutlined
                      onClick={() => {
                        handleDeleteNotDoneTodos(item.id);
                      }}
                    />
                  </span>
                </Col>
              </Row>
            </div>
          );
        })}
    </div>
  );
};

export default Index;
