import './App.css';
import { CardBody } from './components/CardBody';
import { CardFooter } from './components/CardFooter';
import { CardHeader } from './components/CardHeader';
import { Card } from './components/Card';
import { Grid } from './components/Grid';
//jeg tror det her er hvad du mente?
function App() {
  const dataArray = [
    {
      textContent: 'Meget meget træt',
      title: 'Troels er træt',
      footerContent: 'Af dimir',
      image: 'public/300px-Unsettled_Tom.jpg',
    },
    {
      textContent: 'Meget meget træt',
      title: 'Troels er træt',
      footerContent: 'Af jeskai',
      image: 'public/300px-Unsettled_Tom.jpg',
    },
    {
      textContent: 'Meget meget træt',
      title: 'Troels er træt',
      footerContent: 'Af graveyard hate',
      image: 'public/300px-Unsettled_Tom.jpg',
    },
    {
      textContent: 'Meget meget træt',
      title: 'Troels er træt',
      footerContent: 'Af ting',
      image: 'public/300px-Unsettled_Tom.jpg',
    },
    {
      textContent: 'Meget meget træt',
      title: 'Troels er træt',
      footerContent: 'Af manascrew',
      image: 'public/300px-Unsettled_Tom.jpg',
    },
    {
      textContent: 'Meget meget træt',
      title: 'Troels er træt',
      footerContent: 'Af bant airbend',
      image: 'public/300px-Unsettled_Tom.jpg',
    },
  ];

  return (
    <>
      <Grid gtc={3} gap={12}>
        {dataArray.map((card) => (
          <Card>
            <CardHeader text={card.title} />
            <img src={card.image}></img>
            <CardBody content={card.textContent} />
            <CardFooter content={card.footerContent} />
          </Card>
        ))}
      </Grid>
      {/* <Card>
        <CardHeader text={dataObject.title} />
        <CardBody content={dataObject.textContent} />
        <CardFooter content={dataObject.footerContent} />
      </Card> */}
    </>
  );
}

export default App;
