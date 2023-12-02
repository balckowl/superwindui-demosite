import { CardSection, CardSection2, Footer, Header2, Hero } from 'superwindui'
import './App.css'

function App() {

  return (
    <>
      <Header2
        brandName={{ name: 'SuperwindUI', link: '/superwindCSS' }}
        menuList={[{ name: 'docs', link: '/docs' }, { name: 'blog', link: '/blog' }]}
        logoSrc={'/superwind.png'}
        bgColor={'#f9faff'}
        height={13}
      />
      
      <Hero
        heroTitle={'SuperwindUI'}
        heroText={'次世代のUライブラリ、軽量で学習コストも低い'}
        heroImage={'/wind.jpg'}
        heroBtn={{ name: '詳細を見る', link: '/more', color: "white", bgColor: "navy" }}
      />

      <CardSection
        bgColor={'#f9faff'}
        sectionTitle={'Features'}
        cardList={[
          { title: '超速での開発', text: '自由度を下げることにより、超速での開発を実現', image: '/develop.jpg' },
          { title: '初心者', text: 'ドキュメントのわかりやすさ、パラメータの少なさから初心者おすすめ', image: '/beginner.jpg' },
          { title: '見やすい', text: 'コードが見やすく、日本人作成によりドキュメントが読みやすい', image: '/easyToSee.jpg' }
        ]}
      />

      <CardSection2
        bgColor={'#eee'}
        sectionTitle={'Created By'}
        cardList={[
          { title: 'S.Yamamoto', text: 'Frontend', image: '/older.jpg', snsList: [{ name: 'twitter', link: '/twitter', icon: '/twitter.svg' }, { name: 'instagram', link: '/instagram', icon: '/instagram.svg' }, { name: 'threads', link: '/threads', icon: '/threads.svg' }] },
          { title: 'M.Hayasi', text: 'Backend', image: '/woman.jpg', snsList: [{ name: 'x', link: '/twitter', icon: '/x-twitter.svg' }, { name: 'instagram', link: '/instagram', icon: '/instagram.svg' }, { name: 'threads', link: '/threads', icon: '/threads.svg' }] },
          { title: 'R.Sasahara', text: 'Designer', image: '/people.jpg', snsList: [{ name: 'threads', link: '/threads', icon: '/threads.svg' }] }
        ]}
      />

      <Footer brandName={'SuperwindUI'} bgColor={'#f9faff'} />
    </>
  )
}

export default App
