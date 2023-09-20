import Count from "../component/Count";
import EventObj from "../component/EventObj";
import HeaderMenu from "../component/HeaderMenu";
import { PropsType1, PropsType2, PropsType3 } from "../component/PropsType";
import SetText from "../component/SetText";

export default function Lecture() {
  return (
    <>
      <HeaderMenu></HeaderMenu>
      <h1>Lecture pages</h1>
      <PropsType1 name="allie" />
      <PropsType2
        width="100px"
        height="100px"
        color="green"
        borderColor="black"
      />
      <PropsType3 width={200} height={200} text="안녕하세요" />
      <Count />
      <SetText />
      <EventObj />
    </>
  );
}
