function Foo() {

    var url;

    var current_origin = window.location["host"] || ""   ;
    console.log(current_origin);
    var _in_archive_1 = current_origin.includes('archive.org');
    console.log(_in_archive_1)


    const setUrl = (i) => {
        url = i;
    }

    const getURL = (i) => {
        console.log(url);
        return fetch(url, {
            method: 'GET'
        });
    }

    const check_in_archive = () => {
        _in_archive_2 = false;
        const memento = "https://web.archive.org/web/0/https://www.cs.odu.edu/~mln/";
        console.log(memento);
        return fetch(memento, {
            mode: 'no-cors',
            headers: {
              'Access-Control-Allow-Origin':'*'
            }
          }).then(function(res) {
            console.log(res); 
            console.log(res.status); // returns 200
            if(res.status == 200){
                console.log("Live web");
            }
            if(res.status == 404){
                _in_archive_2 = true
                console.log("Archive");  
            }
        });        
    }

    return {check_in_archive, getURL, setUrl};


}
