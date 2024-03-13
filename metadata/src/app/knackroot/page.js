export default function page(){
    return(
        //don't use title tag here ex <title>knackroot</title>
        <div>
        <h1>This is Knackroot page</h1>    
        </div>
        
    );
}

export function generateMetadata(){
    return {title : "knackroot"}
}

