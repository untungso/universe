/**
 */
import { Button } from "../../components/button/base";
import type { ReactElement } from "react";
/**
 */
const Ping = (): ReactElement => {
  const handlePing = async () => {
    console.log(`dataFromFilaments.messages`, `dataFromMicros.messages`);
  };
  return (
    <div>
      <Button onClick={handlePing}>Ping</Button>
    </div>
  );
};

export default Ping;
