import { CardSection, CardSection2, Footer, Header, Hero } from 'superwindui'
import './App.css'

function App() {

  return (
    <>
      <Header
        brandName={{ name: 'SuperwindUI', link: '/superwindCSS' }}
        menuList={[{ name: 'docs', link: '/docs' }, { name: 'blog', link: '/blog' }]}
        hamImage={'/ham.svg'}
        bgColor={'#eef'}
      />
      
      <Hero
        heroTitle={'SuperwindUI'}
        heroText={'次世代のUライブラリ、軽量で学習コストも低い'}
        heroImage={'/superwindui.png'}
        heroBtn={{ name: '詳細を見る', link: '/more', color: "white", bgColor: "navy" }}
      />

      <CardSection
        bgColor={'#eef'}
        sectionTitle={'Features'}
        cardList={[
          { title: '超速での開発', text: '自由度を下げることにより、超速での開発を実現', image: '/superwindui.png' },
          { title: '初心者', text: 'ドキュメントのわかりやすさ、パラメータの少なさから初心者おすすめ', image: '/superwindui.png' },
          { title: '見やすい', text: 'コードが見やすく、日本人作成によりドキュメントが読みやすい', image: '/superwindui.png' }
        ]}
      />

      <CardSection2
        sectionTitle={'Created By'}
        cardList={[
          { title: 'S.Yamamoto', text: 'Frontend', image: '/superwindui.png', snsList: [{ name: 'twitter', link: '/twitter', icon: '/twitter.svg' }, { name: 'instagram', link: '/instagram', icon: '/instagram.svg' }, { name: 'threads', link: '/threads', icon: '/threads.svg' }] },
          { title: 'M.Hayasi', text: 'Backend', image: '/superwindui.png', snsList: [{ name: 'x', link: '/twitter', icon: '/x-twitter.svg' }, { name: 'instagram', link: '/instagram', icon: '/instagram.svg' }, { name: 'threads', link: '/threads', icon: '/threads.svg' }] },
          { title: 'R.Sasahara', text: 'Designer', image: '/superwindui.png', snsList: [{ name: 'threads', link: '/threads', icon: '/threads.svg' }] }
        ]}
      />

      <Footer brandName={'SuperwindUI'} bgColor={'#eef'} />
    </>
  )
}

export default App
