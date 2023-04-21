import { blue, lime, red } from "@mui/material/colors";
// import useAppStyles from "./AppStyles";
import React from "react";

function App() {
  // const classes = useAppStyles();
  const [noContent] = React.useState(true);
  return (
    <div
      style={{
        minHeight: "100%",
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        gridTemplateColumns: "100%",
      }}
    >
      <div
        about="navbar"
        style={{
          width: "100vw",
          //! dbg props
          padding: "10px 0",
          background: lime[100],
          textAlign: "center",
          position: "sticky",
          top: 0,
        }}
      >
        1
      </div>
      <div
        about="content"
        style={{
          width: "90vw",
          margin: "0 auto",
          //! dbg props
          padding: "0 10px",
          background: red[100],
        }}
      >
        {!noContent && (
          <>
            <p>
              Qui eu ex anim culpa duis velit adipisicing ut exercitation
              reprehenderit dolore sit. Sunt ipsum eu dolore deserunt do
              incididunt occaecat pariatur exercitation do do ex reprehenderit.
              Labore occaecat sint amet enim cupidatat. Commodo ipsum voluptate
              do adipisicing fugiat cillum Lorem dolor voluptate. Lorem magna
              excepteur officia mollit qui anim in non fugiat. Consectetur elit
              qui esse sint nostrud et duis eu culpa. Pariatur ut nostrud
              officia non enim aute excepteur enim laboris consequat esse magna
              cillum. Nisi dolor excepteur reprehenderit ut enim est officia
              pariatur mollit ut occaecat amet reprehenderit.
            </p>{" "}
            <p>
              Amet enim anim id irure id deserunt anim sint minim nisi aliquip
              irure eiusmod aliqua. Ipsum eu pariatur est excepteur qui
              adipisicing ullamco enim ea ut exercitation. Laboris aliquip ut
              labore Lorem magna nostrud. Veniam mollit dolore ea sint ea
              voluptate id. Aliquip eiusmod irure cillum sunt irure ullamco sint
              tempor ut do magna. Et et commodo in enim ad incididunt nostrud
              esse. Ex voluptate irure laboris cillum esse commodo. Est mollit
              cupidatat aute occaecat non exercitation cillum occaecat dolore
              labore. Nostrud ipsum consequat id laborum consectetur anim amet
              consectetur eiusmod ea est. Est sunt ipsum in minim cillum.
            </p>{" "}
            <p>
              Et nulla laborum irure velit. Dolor in minim esse ea nostrud
              occaecat. Sint cillum eiusmod nulla commodo incididunt. Ex est ad
              non Lorem id quis. Lorem enim enim esse nisi nisi pariatur anim
              dolor. Deserunt officia excepteur mollit nostrud excepteur qui
              veniam mollit fugiat commodo sunt Lorem ea. Eiusmod anim deserunt
              voluptate mollit magna aliquip commodo commodo minim labore
              nostrud. Cillum officia nisi in ex ad labore veniam. Occaecat
              officia aute cillum non laborum esse veniam ullamco. Dolore eu
              consectetur non consequat excepteur occaecat anim eu.
            </p>{" "}
            <p>
              Eiusmod nulla esse laborum excepteur consequat qui ea dolore
              velit. Esse ad proident minim et proident do. Ad ipsum id culpa
              duis occaecat anim elit eiusmod. Nulla ad exercitation esse
              eiusmod officia proident cupidatat et ipsum sunt mollit amet
              aliquip duis. Duis laboris eiusmod adipisicing proident sit
              proident proident. Nulla ex sit commodo ut culpa aute
              reprehenderit incididunt quis ullamco veniam voluptate sint
              aliqua. Dolor enim sint ad quis incididunt ullamco ullamco
              incididunt dolore aute do nisi. Consequat nostrud eiusmod Lorem
              pariatur veniam sint duis nulla. Quis irure ut laborum id. Eiusmod
              id reprehenderit sit Lorem. Sunt amet reprehenderit mollit magna
              do velit non anim veniam et reprehenderit fugiat tempor. Commodo
              eiusmod nisi occaecat deserunt ullamco ullamco fugiat. Proident
              qui cillum ipsum non mollit sunt commodo consequat officia sint id
              amet. Adipisicing et dolore adipisicing culpa quis anim excepteur
              magna qui nulla occaecat nisi. Aute eiusmod officia est et dolor
              incididunt labore laborum proident. Minim incididunt magna minim
              est proident ea dolore labore quis veniam. Dolor esse voluptate
              commodo amet ea proident excepteur laborum. Non officia magna quis
              et nulla ipsum eiusmod dolore labore.
            </p>
          </>
        )}
      </div>
      <div
        about="footer"
        style={{
          width: "100vw",
          //! dbg props
          padding: "0 10px",
          background: blue[100],
        }}
      >
        3
      </div>
    </div>
  );
}

export default App;
