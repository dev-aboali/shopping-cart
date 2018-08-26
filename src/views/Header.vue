<template>
  <header class="header">
  	<nav class="navbar navbar-light bg-light">
    	<span class="navbar-brand mb-0 h1">Shopping Cart</span>
  	</nav>
  	<h1 class="header__title">Let's shop some fake products ;)</h1>
  	<p class="header__subtitle">Search for anything you want</p>

  </header>
</template>

<style scoped lang="scss">
	.header{
		background: url(../assets/header2.jpeg) no-repeat;
		background-size: cover;
		height: 30rem;
		position: relative;

		&__title{
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			color: #fff;
			font-size: 2rem;
		}
		
		&__subtitle{
			position: absolute;
			top: 60%;
			left: 50%;
			transform: translate(-50%,-50%);
			color: #fff;
			font-size: 1.6rem;
		}

		@media(max-width: 600px) {
		&__title{
			font-size: 1.3rem;
		}
		&__subtitle{
			font-size: 1rem;
			left: 47%
		}
	}
	}

</style>
