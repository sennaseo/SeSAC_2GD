export default function EventObj() {
  function handleClick(e: React.MouseEvent<HTMLElement>) {
    console.log(e);
    console.log(e.target);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target);
    console.log(e.target.value);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLElement>) {
    console.log(e.key);
    console.log(e.code);
    console.log(e.key);
  }
  return (
    <>
      <h2>이벤트 객체 타입 확인</h2>
      <div onClick={(e) => console.log(e)}> onClick </div>
      <div onClick={(event) => handleClick(event)}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>

      <div>
        <input type="text" onChange={(e) => handleChange} />
      </div>

      <div>
        onKeyDownL
        <input type="text" onKeyDown={(e) => handleKeyDown(e)} />
      </div>
    </>
  );
}
