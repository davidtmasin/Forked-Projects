import React , { useState , useEffect , useContext } from 'react';
import style from './ctydetail.module.css'

const CountryDetail = (props)=> {

    const MyContext = React.createContext("col")
    
    const [countryCode, setCountryCode] = useState({
        code: '',
    })
    const [languages, setLanguages] = useState([])
    const [borders, setBorders] = useState([])
    const [currencies, setCurrencies] = useState([])
    const [translations, setTranslations] = useState([])
    const [regBlocs, setRegBlocs] = useState([])
    const [callingCodes, setCallingCodes] = useState([])
    const [timeZones, setTimeZones] = useState([])


    const code = useContext(MyContext)
    const currentCountry = props.match.params.code





    useEffect(()=>{
        getCountryDetail()
     
      }, [code])


    const getCountryDetail = async () => {  
        const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${currentCountry}`)
        const data = await response.json()
        
        setCountryCode(data)
        console.log(data)
        
    
        
        const langs = data.languages
     

        let l = []

        for(var i = 0; i < langs.length; i++) {
            l.push(langs[i].name)
        }

        setLanguages(l)

        const bords = data.borders
     

        let b = []

        for(var j = 0; j < bords.length; j++) {
            b.push(bords[j])
        }

        setBorders(b)

        const curr = data.currencies
        
        let c = []
     

        for(var k = 0; k < curr.length; k++) {
            c.push(curr[k].name)
        }

        setCurrencies(c)

     

        const transL = (data.translations)

        // let trArr = Object.entries(transL).map((e) => ( { [e[0]]: e[1] } ))
        
        let string = JSON.stringify(transL)

        string = string.replace(/[{}]/g, '')

        let t = [] 
        
        t.push(string.split(",").map(String)) //fazer slice para tirar os characteres e ditar o nome dos países corretamente

        // console.log(trArr)
  

        setTranslations(t)

        const rBlocs = data.regionalBlocs
        let rb = []

        for (var m = 0; m < rBlocs.length; m++){
            rb.push(rBlocs[m].name)

        }

        setRegBlocs(rb)

        const cCode = data.callingCodes
        let cc = []

        for (var n = 0; n < cCode.length; n++){
            cc.push(cCode[n])

        }

        console.log(callingCodes)

        setCallingCodes(cc)

        const tZone = data.timezones
        let tz = []

        for (var q = 0; q < tZone.length; q++){
            tz.push(tZone[q])

        }

        console.log(timeZones)
        console.log(tz)

        setTimeZones(tz)



      



       

    
       

        

        
      
            
      }


      const listLanguages = languages.map((languages, index) =>
        <li className={style.dtli} key={`l${index}`} id={`l${index}`}><strong>Languages: </strong>{languages}</li>
        
   

      )

      const listBorders = borders.map((borders, index) =>
      <li className={style.dtlib} key={`br${index}`}><a href={`/countryDetail/${borders}`} key={`b${index}`} id={`b${index}`}>{borders}</a></li>
      
  
    )

    const listCurrencies = currencies.map((currencies, index) =>
    <li className={style.dtli} key={`c${index}`} id={`c${index}`}><strong>Currency: </strong>{currencies}</li>
    


  )

    // const listTranslations = translations.map((translations, index) =>
    // <li key={`t${index}`} id={`t${index}`}>{translations}</li>
    
    

    // )


  


   


    return (                        
        <main>
            <div className={style.headerdt}>
                <h1 className={style.wwtitledt}>Where in the world?</h1>       
            </div>
            <main className={style.maincont}>
                <section className={style.btncontainer}>

                </section>
                <section key={"countryDetail"} className={style.ctydtcontainer}>
                    <div className={style.flagcont}>
                        <img className={style.flag} key={"countryFlag"} src={countryCode.flag} alt=""></img>
                    </div>
                    <div className={style.ctinfocont}>
                        <div className={style.namecont}>
                            <h1 className={style.ctyname} key={"Name"}>{countryCode.name}</h1>                        
                        </div>
                        <ul className={style.dtulleft}>
                            <li className={style.dtli} key={"nativeName"}><strong>Native Name:</strong> {countryCode.nativeName}</li>
                            <li className={style.dtli} key={"countryCapital"}><strong>Capital:</strong> {countryCode.capital}</li>
                            <li className={style.dtli} key={"countryPopulation"}><strong>Population:</strong> {countryCode.population}</li>
                            <li className={style.dtli} key={"countryRegion"}><strong>Region:</strong> {countryCode.region}</li>
                            <li className={style.dtli} key={"countryRegion"}><strong>SubRegion:</strong> {countryCode.subregion}</li>                            
                        </ul>
                        <ul className={style.dtulright}>
                            {listLanguages}
                            {listCurrencies}
                            <li className={style.dtli} key={"callC"}><strong>Calling Code:</strong> {callingCodes} </li>
                            <li className={style.dtli} key={"timeZ"}><strong>Timezones:</strong> {timeZones} </li>                            
                        </ul>                                          
                        <ul className={style.dtulbottom} key={"borders"}>
                            <strong>Border countries:</strong> 
                            <div>
                                {listBorders}
                            </div>            
                        </ul>                        
                    </div>
                               
                              
                </section>            
            </main>            
        </main>       
               
            
            
        
          
            

            
            
       
    )
}



//agora precisa fazer uma func getdetail com um window.location /countrydetail pra ser chamada ali no listborders

export default CountryDetail