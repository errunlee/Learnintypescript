type GreatProps = {
  thename: string;
  messages: number;
  isMale: boolean;
};

function Great({ thename, messages }: GreatProps) {
  return (
    <div>
      <h2>
        Hi this is {thename} from Hamnuuuuuuuuuuuuuuuuuuuuu. You have {messages}{" "}
        messages.
      </h2>
    </div>
  );
}

export default Great;
