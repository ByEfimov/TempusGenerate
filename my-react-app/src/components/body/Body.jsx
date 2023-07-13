import AllPlace from "./Places/AllPlace";
import TommorowPlace from "./Places/TommorowPlace";
import MainPlace from "./Places/MainPlace";

function Body() {
  return (
    <section className="body">
      <AllPlace></AllPlace>
      <MainPlace></MainPlace>
      <TommorowPlace></TommorowPlace>
    </section>
  );
}
export default Body;
