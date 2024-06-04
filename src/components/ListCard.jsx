/* eslint-disable react/prop-types */
export default function ListCard( {UiProps})
{
   return(
      <div className="Card-Container">
          <img src={UiProps.image} alt="" />
          <h2>{UiProps.name}</h2>
      </div>
   )
}