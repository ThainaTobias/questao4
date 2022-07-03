
function Button({link, nome}) {

    return(

      <div className="principal">
        <div className="link">
          <img className="foto" src={link} alt={nome} />
        </div>
        <div className="nome">
          <p>{nome}</p>
        </div>
      </div>
        
    );
}
export default Button;