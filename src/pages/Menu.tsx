
import Layout from "../components/Layout";
import MainMenuContainer from "../components/Menu/MainMenuContainer";


export default function Menu() {
 
  return (
    <>
  
      <Layout>
        <MainMenuContainer/> {/* why did i do this? shouldnt this page component be the container?*/ }
      </Layout>
    </>
  );
}
