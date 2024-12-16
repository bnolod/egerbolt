import Card from "../../components/_basic_components/card";
import Footer from "../../components/_basic_components/footer";
import Screen from "../../components/_basic_components/Screen";
import Subscreen from "../../components/_basic_components/subScreen";

export default function HomePage() {
  return (
    <Screen navbar={true} centeredContent={true}>
      <Subscreen>
      <Card
        className="bg-secondary"
        title="Üdvözlünk a webshopunkon!"
        subtitle="Az első számú"
        description="Csodás napot kívánunk! Hali!"
      ></Card>
      <Card
        title="Üdvözlünk a webshopunkon!"
        subtitle="Az első számú"
        description="Csodás napot kívánunk! Hali!"
      ></Card>
      </Subscreen>
      <Footer/>
    </Screen>
  );
}
