export const NewsOutput = async (url) =>{
    try {
        const res = await fetch(url);
        if(!res.ok){
            console.error('Ошибка выполнения.', res.status);
            return false;
        }
        return await res.json();
    } catch (error) {
        console.error('Ошибка выполнения.', error.message);
        return false;
    }
}


