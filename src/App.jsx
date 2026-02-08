import './App.css';
import { CardBody } from './components/CardBody';
import { CardFooter } from './components/CardFooter';
import { CardHeader } from './components/CardHeader';
import { Card } from './components/Card';
//jeg tror det her er hvad du mente?
function App() {
  const dataObject = {
    textContent: 'Meget meget træt',
    title: 'Troels er træt',
    footerContent: 'Af ting',
  };

  return (
    <>
      <Card>
        <CardHeader text={dataObject.title} />
        <CardBody content={dataObject.textContent} />
        <CardFooter content={dataObject.footerContent} />
      </Card>
    </>
  );
}

export default App;
