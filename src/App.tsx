import React from 'react';
import { Container } from './styles';
import Card from './components/Card';
import { IProduct } from './typings';

const products = [
  {
    id: 0,
    photo: "https://images-americanas.b2w.io/produtos/01/00/img/1515753/7/1515753749_1SZ.jpg",
    name: "Monitor LED 27'' Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
    currency: "R$",
    old_price: 2813.99,
    price: 2599.00,
    installments: 10,
    installments_price: 259.90
  },
  {
    id: 1,
    photo: "https://images-americanas.b2w.io/produtos/01/00/img/1515753/7/1515753749_1SZ.jpg",
    name: "Monitor LED 27'' Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
    currency: "R$",
    old_price: 2813.99,
    price: 2599.00,
    installments: 10,
    installments_price: 259.90
  }
]

const App: React.FC = () => {

  return (
    <Container>
      <div className="App">
        <section>
          {products.map((prod: IProduct) => (
            <Card product={prod} />
          ))}
        </section>
      </div>

    </Container>
  );
}

export default App;
