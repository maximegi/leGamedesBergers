function probaTemps(n) {
  if(n >= 0 && n <= 1/3) {
    return 0;
  }
  if(n > 1/3 && n <= 2/3) {
    return 1;
  }
  if(n > 2/3 && n <= 1) {
    return 2;
  } 
}

function probaPorteRose(nbMoutonDelet, n) {
  p = nbMoutonDelet/nbSheep;
  if(n >= 0 && n <= p) {
    pinkDoor = 5;
  }
  else {
    if(n > p && n <= (1+p)/2) {
      if(n > p && n <= (1+3*p)/4) {
        pinkDoor = 2;
      }
      if(n > (1+3*p)/4 && n <= (1+p)/2) {
        pinkDoor = 1;
      }
    }
    if(n > (1+p)/2) {
      if(n > (1+p)/2 && n <= (3+p)/4) {
        pinkDoor = 4;
      }
      if(n > (3+p)/4) {
        pinkDoor = 3;
      }
    }
  }
  return pinkDoor;
}

function probaPorteNoir(nbMoutonDelet, n) {
  p = nbMoutonDelet/nbSheep;
  if(n >= 0 && n <= p) {
    blackDoor = 3;
  }
  else {
    if(n > p && n <= (1+p)/2) {
      if(n > p && n <= (1+3*p)/4) {
        blackDoor = 5;
      }
      if(n > (1+3*p)/4 && n <= (1+p)/2) {
        blackDoor = 4;
      }
    }
    if(n > (1+p)/2) {
      if(n > (1+p)/2 && n <= (3+p)/4) {
        blackDoor = 2;
      }
      if(n > (3+p)/4) {
        blackDoor = 1;
      }
    }
  }
  return blackDoor;
}
//retourne la valeur de la factorielle de x
function fact(x) {
  if (x < 0) return;
  if (x === 0) return 1;
  return x * fact(x - 1);
}
// retourne la probabilité que P(X=k) lorsque que X suit
//une loi de poisson de paramètre (lambda)
function poisson(lambda, k) {
  return (pow(lambda, k)/fact(k)) * exp(-lambda);
}
//retourne la valeur de l'evenement correspondant
//au nombre aléatoire n € [0,1] (flottant)
//Construit un tableau qui représente l'intervalle
//dans lequel placer n. (technique vue en cours)
function probaPoisson(lambda, n, nbHerd) {
  var values = [0];
  let prev = 0;
  for(let i = 1; i < nbHerd - 1; ++i) {
    values.push(poisson(lambda,i-1-2) + prev)
    prev+=poisson(lambda,i-1-2);
  }
  values[nbHerd-1] = 1;
  for(let i = 0; i < nbHerd - 1; ++i) {
    if(n > values[i] && n <= values[i+1]) {
      return i;
    }
  }
  //dans le cas d'erreur on retourne la valeur moyenne
  return lambda;
}

// retourne le coefficient binomial de k parmi n 
function coeff(n, k) {
  var coeff = 1;
  for (var x = n-k+1; x <= n; x++) coeff *= x;
  for (x = 1; x <= k; x++) coeff /= x;
  return coeff;
}

// retourne la probabilité que P(X=k) lorsque que X suit
//une loi binomiale de paramètre (total,p)
function binomial(total, p, k) {
  return coeff(total, k)*pow(p, k)*pow((1-p), (total-k));
}

//retourne la valeur de l'evenement correspondant
//au nombre aléatoire n € [0,1] (flottant)
//Construit un tableau qui représente l'intervalle
//dans lequel placer n. (technique vue en cours)
function probaBinomiale(n, p, nbHerd) {
  var values = [0];
  let prev = 0;
  for(let i = 1; i < nbHerd - 1; ++i) {
    values.push(binomial(nbHerd - 2, p, i) + prev)
    prev+=binomial(nbHerd - 2, p, i-1);
  }
  values[nbHerd-1] = 1;
  for(let i = 0; i < nbHerd - 1; ++i) {
    if(n > values[i] && n <= values[i+1]) {
      return i;
    }
  }
}


function geometric(p, k) {
  return pow((1-p),k-1)*p;
}

function probaGeometric(n, p, nbHerd) {
  var values = [0];
  let prev = 0;
  for(let i = 1; i < nbHerd - 1; ++i) {
    values.push(geometric(p, i) + prev)
    prev+=geometric(p, i-1);
  }
  values[nbHerd-1] = 1;
  for(let i = 0; i < nbHerd - 1; ++i) {
    if(n > values[i] && n <= values[i+1]) {
      return i;
    }
  }
}
