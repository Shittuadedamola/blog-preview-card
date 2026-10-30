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
    </>
  )
}

export default Header