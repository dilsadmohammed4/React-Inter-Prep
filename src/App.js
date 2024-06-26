import "./App.css";
import { UseRef } from "./components/use-ref/UseRef.jsx";

const App = () => {
  return (
    <>
      {/* 1. Use Context */}
      {/* <Component1 /> */}

      {/* 2. Class Component */}
      {/* <Profile /> */}

      {/* 3. Use State Example */}
      {/* <UseState /> */}

      {/* 4. Use Memo Example */}
      {/* <WithoutUseMemo/> */}
      {/* <WithUseMemo /> */}

      {/* 5. Use Callback Example */}
      {/* <WithoutUseCallback /> */}
      {/* <WithUseMemo /> */}

      {/* 5. Use Ref Example */}
      <UseRef />
      {/* <WithUseMemo /> */}

      {/* 5. Use Reducer Example */}
      {/* <IncDecUseReducer /> */}
      {/* <GdMEN /> */}

      {/* <DoBox/> */}
      {/* <LeftToRight /> */}
      {/* <MoveItems/> */}
    </>
  );
};

export default App;
