import './App.css';
import { CardBody } from './components/CardBody';
import { CardFooter } from './components/CardFooter';
import { CardHeader } from './components/CardHeader';
import { Card } from './components/Card';
// Du skal i denne opgave bygge et stylet Card component som har 3 child components der tager imod props.
// De tre child components er:

//     Et CardHeader komponent (skal tage imod en "text" prop)
//     Et CardBody komponent (skal tage imod en "content" prop)
//     Et Card Footer komponent  (skal tage imod en "content" prop)

// Din opgave er nu at indsætte de tre komponenter i dit overordnede Card komponent.
// Herefter skal du lave et objekt i din App.js fil. Denne skal indeholde følgende:

//     textContent - det text der skal vises på cardet
//     title - titlen der skal vises på cardet
//     footerContent - det text der skal vises i bunden af cardet

// Nu skal du sende dit objekt ind i Card som en prop og videre ned til de tre child components.
// Til slut skulle du gerne ende ud med et Card som har tre child komponents, hvor alt content kommer fra App.js.

// Bonus:

// Som bonus til denne opgave skal du lave "placeholder", eller "default" values til alle tre child components. Disse default values skal vise at der ikke er noget indhold.

// Aflevering:

// Opgaven afleveres på Github med et link til dit repository
function App() {
  const dataObject = {
    textContent: 'Meget meget træt',
    title: 'Troels er træt',
    footerContent: 'Af ting',
  };

  return (
    <>
      <Card data={dataObject}>
        <CardHeader text={dataObject.title} />
        <CardBody content={dataObject.textContent} />
        <CardFooter content={dataObject.footerContent} />
      </Card>
    </>
  );
}

export default App;
