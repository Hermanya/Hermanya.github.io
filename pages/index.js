import React from 'react'
import {
  MyHead,
  MySection, MySocialLink, NewLabel, Layout
} from '../components'
import classNamed from 'classnamed-components'
const Column = classNamed('div')`d-flex flex-column text-center`
const IconColumn = ({ icons = [], ...props }) => <Column {...props}>
  {new Array(20).fill(1).map((_, i) => <i className={`${
    icons[i % icons.length]
  } fa-4x text-light mb-5`} key={i} />)}
</Column>

export default () => (
  <React.Fragment>
    <MyHead />
    <Layout
      main={
        <div className='d-flex flex-column justify-content-center h-100'>
          <h1 className='display-4 mb-4 text-center text-md-left text-serif'>
            <span className='mr-3 d-inline-block animated rotateInUpLeft'>👋</span> I'm <strong>Herman</strong>,<br /> <small>I make apps on the web</small>
          </h1>
          <p>
          Noice to meet you! I'm a Software Developer at <a href='https://rangle.io'>Rangle.io</a> by day
          and a Digital Maker by night. Recently I made: a <a href='https://ui1.io'>UI kit builder</a> and <a href='https://leananalytics.io'>Lean Analytics</a>, a tool that makes A/B testing easy for React apps.
          </p>
          <p>
          I am not super active on social, but when I make interesting stuff, I post it.
          If you are into cool internet apps, or just want to know what
          Software Developer's life in Toronto is like, follow me on the social platform of your choice.
          </p>

          <MySection text='Do you have a question or want to say hi?' cta='Message me' className='animated bounceInUp'>
            <MySocialLink href='mailto:herman.starikov@gmail.com' color='#dd4b39' children={<i className='fas fa-at' title='email' />} />
            <MySocialLink href='https://m.me/hermanhasawish' color='#0084ff' children={<i className='fab fa-facebook-messenger' title='Messenger' />} />
            <MySocialLink href='http://t.me/hermanya' color='#0088cc' children={<i className='fab fa-telegram' title='Telegram' />} />
          </MySection>

          <MySection text='Wondering what I do in my spare time?' ctas={[{
            cta: 'Review my code',
            children: <React.Fragment>
              <MySocialLink href='https://github.com/hermanya' color='#333' children={<i className='fab fa-github' title='github' />} />
              <MySocialLink href='https://codepen.io/Hermanya' color='#000' children={<i className='fab fa-codepen' title='codepen' />} />
              <MySocialLink href='https://stackoverflow.com/users/7228427/herman-starikov' color='#f48024' children={<i className='fab fa-stack-overflow' title='stack-overflow' />} />
              {/* <MySectionLink href='' children={<i className='fab fa-' title='' />} /> */}
            </React.Fragment>
          }, {
            cta: 'Read my writing',
            children: <React.Fragment>
              <MySocialLink href='https://medium.com/@hermanhasawish' color='#000' children={
                <span className='position-relative'>
                  <i className='fab fa-medium' title='medium' />
                  <NewLabel />
                </span>
              } />
              <MySocialLink href='https://twitter.com/hermanhasawish' color='#1da1f2' children={<i className='fab fa-twitter' title='twitter' />} />
            </React.Fragment>
          }, {
            cta: 'Other things',
            children: <React.Fragment>
              <MySocialLink href='https://dribbble.com/hermanya'
                color='#ea4c89'
                children={<span className='position-relative'>
                  <i className='fab fa-dribbble' title='Dribbble' />
                </span>} />
              <MySocialLink href='https://www.producthunt.com/@hermanhasawish/made'
                color='#da552f'
                children={<i className='fab fa-product-hunt' title='product hunt' />} />
            </React.Fragment>
          }]} className='animated bounceInUp delay-1' />

          <MySection text='Looking to hire a Software Developer?' cta='You can check my work experience' className='animated bounceInUp delay-2' >
            <MySocialLink href='https://linkedin.com/in/hermanstarikov' color='#0077b5' children={<i className='fab fa-linkedin' title='linkedin' />} />
            <MySocialLink href='https://angel.co/hermanya' color='#000' children={<i className='fab fa-angellist' title='angel list' />} />
            <MySocialLink href='/resume' color='#000' children={<i className='far fa-file' title='resume' />} />
          </MySection>

          <MySection text='Curious what my life is like?' cta='See here' className='animated bounceInUp delay-3' >
            <MySocialLink href='https://facebook.com/hermanhasawish' color='#3b5998' children={<i className='fab fa-facebook' title='facebook' />} />
            <MySocialLink href='https://instagram.com/hermanya' color='#e1306c' children={<i className='fab fa-instagram' title='instagram' />} />
          </MySection>
        </div>
      }

      aside={
        <React.Fragment>
          <img src='/static/images/small-half-size-herman.png'
            className='d-block mx-auto mw-100 z-index-2 mt-auto animated fadeIn'
            alt='half-size photo of Herman Starikov'
            style={{
              filter: 'drop-shadow(8px 16px 16px rgba(0,0,0,0.25))'
            }} />
          <div className='position-absolute z-index-1 w-100 d-flex justify-content-between' style={{
            fontSize: 'calc(5vw*0.6)'
          }}>
            <IconColumn
              style={{
                animation: 'mover linear 30s infinite  alternate'
              }}
              icons={[
                'fab fa-node', 'fab fa-aws']} />
            <IconColumn
              style={{
                animation: 'mover linear 30s infinite  alternate-reverse'
              }}
              icons={[
                'fab fa-react', 'fab fa-js'
              ]} />
          </div>
        </React.Fragment>
      } />
  </React.Fragment>
)