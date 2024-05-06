
import "./Service.css" 
function Service() {
    const data = [
        {
          id: 1,
          name: "Jay",
          image:
            "https://images.unsplash.com/photo-1456327102063-fb5054efe647?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhaXIlMjBtb2RlbCUyMG1hbGV8ZW58MHx8MHx8fDI%3D",
        },
        {
          id: 2,
          name: "Sharon",
          image:
            "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhhaXIlMjBtb2RlbHxlbnwwfHwwfHx8Mg%3D%3D",
        },
        {
          id: 3,
          name: "Judy",
          image:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGhhaXIlMjBtb2RlbHxlbnwwfHwwfHx8Mg%3D%3D",
        },
        {
          id: 4,
          name: "Brad",
          image:
            "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGFpciUyMG1vZGVsfGVufDB8fDB8fHwy",
        },
        {
          id: 5,
          name: "Deo",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhhaXIlMjBtb2RlbCUyMG1hbGV8ZW58MHx8MHx8fDI%3D",
        },
        {
          id: 6,
          name: "Banks",
          image:
            "https://images.unsplash.com/photo-1595218841793-d38b949402d2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGhhaXIlMjBtb2RlbHxlbnwwfHwwfHx8Mg%3D%3D",
        },
      ];
  return (
    <div> <div className="service-wrapper">
    <h1 className="service-header">Our Stylists</h1>
    <div className="service-container">
      {data.map((item) => (
          <div className="service-item"     key={item.id}
          to={`//${item.id}`} >
            <img
              src={item.image}
              alt={item.name}
              className="service-image"
            />
            <span className="service-text">{item.name}</span>
          </div>
        
      
      ))}
    </div>
  </div></div>
  )
}

export default Service