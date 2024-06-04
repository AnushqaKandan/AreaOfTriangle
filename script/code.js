function calculate (){
    let base = parseInt(document.getElementById('base').value);
    let height = parseInt(document.getElementById('height').value)
    
    let totalArea = ((base/2) * height);
    
    document.getElementById('area').innerText = totalArea;
    }
    
    window.onload = calculate;
    