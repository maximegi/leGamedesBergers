function fact(x) {
  if (x < 0) return;
  if (x === 0) return 1;
  return x * fact(x - 1);
}

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
    if(n > p && n <= (1-p)/2) {
      pinkDoor = int(map(r, 0, 1, 1, 2));
    }
    if(n > (1-p)/2) {
      pinkDoor = int(map(r, 0, 1, 3, 4));
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
    if(n > p && n <= (1-p)/2) {
      blackDoor = int(map(r, 0, 1, 4, 5));
    }
    if(n > (1-p)/2) {
      blackDoor = int(map(r, 0, 1, 1, 2));
    }
  }
  return blackDoor;
}

function poisson(lambda, k) {
  return (pow(lambda, k)/fact(k)) * exp(-lambda);
}

function probaPoisson(lambda, n, nbHerd) {
  var values = [0];
  let prev = 0;
  for(let i = 1; i < nbHerd - 1; ++i) {
    values.push(poisson(lambda,i-1) + prev)
    prev+=poisson(lambda,i-1);
  }
  values[nbHerd-1] = 1;
  for(let i = 0; i < nbHerd - 1; ++i) {
    if(n > values[i] && n <= values[i+1]) {
      return i;
    }
  }
  return lambda;
}

function coeff(n, k) {
  var coeff = 1;
  for (var x = n-k+1; x <= n; x++) coeff *= x;
  for (x = 1; x <= k; x++) coeff /= x;
  return coeff;
}

function binomial(total, p, k) {
  return coeff(total, k)*pow(p, k)*pow((1-p), (total-k));
}

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
