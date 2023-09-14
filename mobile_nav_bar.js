
const initializeMobileNavBar = (svgButtonList, maxOpenWidth = 500, primaryColor = '#2596be', secondaryColor = '#FFFFFF') => {
    let container = document.createElement('div');
    container.style.position = 'sticky';
    container.style.top = '8px';
    container.style.width = '100%';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';

    let backgroundBar = document.createElement('div');
    backgroundBar.style.backgroundColor = primaryColor;
    backgroundBar.style.borderRadius = '32px';
    backgroundBar.style.height = '64px';
    backgroundBar.style.width = '64px';
    backgroundBar.style.position = 'absolute';
    backgroundBar.style.zIndex = '2';
    backgroundBar.style.transitionDuration = '1s';
    container.append(backgroundBar);

    let buttonCenteringDiv = document.createElement('div');
    buttonCenteringDiv.style.display = 'flex';
    buttonCenteringDiv.style.width = 'min(98%,'+maxOpenWidth.toString()+'px)';
    buttonCenteringDiv.style.justifyContent = 'space-evenly';
    container.append(buttonCenteringDiv);

    let crossButtonDiv = document.createElement('div');
    crossButtonDiv.style.width = '64px';
    crossButtonDiv.style.height = '64px';
    crossButtonDiv.style.zIndex = '3';
    // crossButtonDiv.style.display = 'flex';
    crossButtonDiv.style.flexShrink = '1';

    let crossSVG = document.createElementNS('http://www.w3.org/2000/svg','svg');
    crossSVG.setAttribute('viewbox','0 0 64 64');
    // crossSVG.setAttribute('preserveAspectRatio','xMidYMid meet')
    crossSVG.style.width = '64px';
    crossSVG.style.height = '64px';
    crossSVG.style.fill = secondaryColor;
    crossSVG.style.zIndex = '3';
    crossSVG.style.transitionDuration = '1s';
    crossButtonDiv.append(crossSVG);
    
    let crossPath = document.createElementNS('http://www.w3.org/2000/svg','path');
    crossPath.setAttribute('d','M 28.8 16 h 6.4 v 12.8 h 12.8 v 6.4 h -12.8 v 12.8 h -6.4 v -12.8 h -12.8 v -6.4 h 12.8 z');

    svgButtonList.forEach((button, index) => {
        if (index == svgButtonList.length * 0.5) {
            // buttonCenteringDiv.append(crossSVG);
            buttonCenteringDiv.append(crossButtonDiv);

        }
        let buttonDiv = document.createElement('div');
        buttonDiv.style.width = '64px';
        buttonDiv.style.height = '64px';
        buttonDiv.style.zIndex = '3';
        // buttonDiv.style.display = 'flex';
        buttonDiv.style.flexShrink = '1';
        buttonDiv.append(button);
        buttonCenteringDiv.append(buttonDiv)
        
        // buttonCenteringDiv.append(button);
        
    })

    crossSVG.append(crossPath);
    

    crossSVG.addEventListener('click', toggleNavBarOpen);

    let open = false;

    function toggleNavBarOpen() {
        open = !open;
        if (open) {
            backgroundBar.style.width = 'min(98%,'+maxOpenWidth.toString()+'px)';
            crossSVG.style.rotate = '405deg';
        } else {
            backgroundBar.style.width = '64px';
            crossSVG.style.rotate = '0deg';
        }
    }

    

    return container;
}


/* TEST SCRIPT:
function createTestSVG() {
    let testSVG = document.createElementNS('http://www.w3.org/2000/svg','svg');
    testSVG.setAttribute('viewbox','0 0 64 64');
    testSVG.style.width = '64px';
    testSVG.style.height = '64px';
    testSVG.style.fill = 'white';
    testSVG.style.zIndex = '3';
    testSVG.style.transitionDuration = '1s';
    
    let testPath = document.createElementNS('http://www.w3.org/2000/svg','path');
    testPath.setAttribute('d','M 28.8 16 h 6.4 v 12.8 h 12.8 v 6.4 h -12.8 v 12.8 h -6.4 v -12.8 h -12.8 v -6.4 h 12.8 z');

    testSVG.append(testPath);
    return testSVG;


}



document.body.append(initializeMobileNavBar(
    [
        createTestSVG(),
        createTestSVG(),
        createTestSVG(),
        createTestSVG()
    ]
));
*/


export {initializeMobileNavBar};
