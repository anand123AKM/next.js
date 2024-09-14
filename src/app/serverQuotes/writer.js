"use client";
function Writer(props) {
  return (
    <>
      <div>
        <button
          onClick={() => {
            alert(props.writer);
          }}
        >
          writer
        </button>
      </div>
    </>
  );
}

export default Writer;
