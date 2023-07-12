import { Input } from "antd";

interface TaskInputProp {
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  addTodo: (name: string) => void;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  handleChangeNameNotDoneTodos: (name: string) => void;
  handleChangeNameDoneTodos: (name: string) => void;
}

const Index = (props: TaskInputProp) => {
  const {
    name,
    setName,
    id,
    handleChangeNameNotDoneTodos,
    setId,
    handleChangeNameDoneTodos,
  } = props;
  const { Search } = Input;
  const { addTodo } = props;

  const onSearch = (value: string) => {
    if (id !== "") {
      handleChangeNameNotDoneTodos(value);
      handleChangeNameDoneTodos(value);
      setId("");
    } else {
      addTodo(value);
    }
    setName("");
  };
  return (
    <div style={{ marginTop: "10px", width: "100%" }}>
      <Search
        width={"100%"}
        placeholder="Add Todo"
        onSearch={onSearch}
        enterButton={
          <span style={{ color: "white", fontSize: "15x" }}>Add</span>
        }
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default Index;
