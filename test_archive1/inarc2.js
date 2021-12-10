function Foo() {

    var url;

    var current_origin = window.location["host"];
    console.log(current_origin);
    var _in_archive_1 = current_origin.includes('https://kritikagarg.github.io');
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
        const memento = "https://web.archive.org/web/19961017235908/http://www2.yahoo.com/";
        console.log(memento);
        return fetch(memento, {
            mode: 'no-cors',
            // headers: {
            //   'Access-Control-Allow-Origin':'*'
            // }
          }).then((response) => {
                console.log(response);
                console.log(response.status); // returns 200
                mdt = response.headers.get('memento-datetime');
                console.log(mdt)
                if(!mdt){
                    console.log("Live web");
                }else {
                    console.log(mdt)
                    _in_archive_2 = true
                    console.log("Archive");  
                }
        });        
    }

    return {check_in_archive, getURL, setUrl};


}