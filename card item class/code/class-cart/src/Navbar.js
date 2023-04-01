 function Navbar(props){

    return(
        <div style={styles.nav}>
           
             <div style={styles.cartIconContainer} >
                <img style={styles.cartIcon} src="https://th.bing.com/th/id/R.de4a62e2667a27333cd5f4e94256c712?rik=u7h2vidMygPQWw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_287768.png&ehk=gjxmWBhI4ci6TZX2yh%2fwM82jFQk2HCYJIoYpsY9iEt0%3d&risl=&pid=ImgRaw&r=0"/>
                <span style={styles.cartCount}>{props.count}</span>
             </div>
        </div>
    )
}
//inline css
const styles = {
    cartIcon:{
        height:32,
        width:32,
        marginRight:20,
        background:'white',
        borderRadius:'50%',
    },
    nav:{
        height:70,
        background:"midnightblue",
        display:"flex",
        justifyContent:'flex-end',
        alignItems:'center'
    },
    cartIconContainer:{
        position:'relative'
    },
    cartCount:{
        textAlign:'center',
        width:'50%',
        height:'70%',
        background:'yellow',
        borderRadius:'50%',
        padding:'4x 8px',
        position:'absolute',
        right:50,
        top:-9
    }
}

export default Navbar;


