import illustration from "../assets/illustration-article.svg";

const Header = () => {
  return (
    <>
      <div>
        <img src={illustration} alt="" className="illustrationPicCont"/>
      </div>
      <div className="learning">
        Learning
      </div>
      <p>Published 21 Dec 2023</p>
    </>
  )
}

export default Header