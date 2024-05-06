
import "./Stylist.css";
function Stylist() {
    const data = [
        {id :1,
            name :"Men's Haircut",
           image:"https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFpciUyMHNhbG9ufGVufDB8fDB8fHwy"},
           {id :2,
               name :"Women's Haircut",
            image:"https://images.unsplash.com/photo-1560869713-7d0a29430803?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFpciUyMHNhbG9ufGVufDB8fDB8fHwy"},
          {id :3,
           name :"Blowouts",
          image:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGhhaXIlMjBtb2RlbHxlbnwwfHwwfHx8Mg%3D%3D"},
          {id :4,
           name :"Root Touch-ups",
           image:"https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhhaXIlMjBzYWxvbnxlbnwwfHwwfHx8Mg%3D%3D"},
           {id :5,
               name :"Hair Coloring",
            image:"https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhhaXIlMjBzYWxvbnxlbnwwfHwwfHx8Mg%3D%3D"},
          {id :6,
           name :"Hair Extensions",
          image:"https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhhaXIlMjBzYWxvbnxlbnwwfHwwfHx8Mg%3D%3D"},
       
           
        ]

  return (
    <div>
      {" "}
      <div className="stylist-wrapper">
        <h1 className="stylist-header">Our Services</h1>
        <div className="stylist-container">
          {data.map((item) => (
              <div className="stylist-item"    key={item.id}
              to={`//${item.id}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="stylist-image"
                />
                <span className="stylist-text">{item.name}</span>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stylist;
