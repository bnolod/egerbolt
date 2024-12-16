import Card from "../../components/_basic_components/card";
import Screen from "../../components/_basic_components/Screen";

export default function HomePage() {
  return (
    <Screen navbar={true} centeredContent={true}>
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
    </Screen>
  );
}
