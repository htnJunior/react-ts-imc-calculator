import { useState } from 'react';
import styles from './App.module.css';
import poweredBy from './assets/powered.png';
import { levels, calculateImc} from './helpers/imc';
import { GridItem } from './components/GridItem'

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);

  const handleCalculateImc = () => {
    if(heightField && weightField){
      
    }else{
      alert("Digite todos os campos")
    }
  }


  return(
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredBy} alt="" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule seu IMC.</h1>
          <p>O índice de massa corporal (IMC) é uma medida internacional usada para calcular se uma pessoa está no peso ideal.</p>

          <input 
          type="number" 
          placeholder="Digite a sua altura. Ex: 1.5(em metros)"
          value={heightField > 0 ? heightField : ''}
          onChange={e => setHeightField(parseFloat(e.target.value))}
          />

          <input 
          type="number"
          placeholder="Digite o seu peso. Ex: 80.5(em kg)"
          value={weightField > 0 ? weightField : ''}
          onChange={e => setWeightField(parseFloat(e.target.value))}
          />

          <button onClick={handleCalculateImc}>Calcular IMC</button>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.grid}>
            {levels.map((item, key) => (
              <GridItem key={key} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;