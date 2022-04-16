import * as reactRouterDom from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];

  const history = reactRouterDom.useHistory();

  const onClickDetailA = () => history.push("/page1/detailA");

  return (
    <div>
      <h1>Page1ページです</h1>
      <reactRouterDom.Link to={{ pathname: "/page1/detailA", state: arr }}>
        DetailA
      </reactRouterDom.Link>
      <br />
      <reactRouterDom.Link to="/page1/detailB">DetailB</reactRouterDom.Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
