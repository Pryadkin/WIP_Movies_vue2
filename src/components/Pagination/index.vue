<template>
    <div class="pagination__container">
            <div class="pagination__arrow"
                active={firstBtn !== 1}
                rotate="right"
                onClick={() => clickHandle(1)}
            >
                <svg
                    fill="currentColor"
                    height="34"
                    viewBox="0 0 34 34"
                    width="34"
                >
                    <path d="M16 11L17.5 9.5L25 17L23.5 18.5L16 11Z" />
                    <path d="M23.5 15.5L25 17L17.5 24.5L16 23L23.5 15.5Z" />
                    <path d="M9.5 11L11 9.5L18.5 17L17 18.5L9.5 11Z" />
                    <path d="M17 15.5L18.5 17L11 24.5L9.5 23L17 15.5Z" />
                </svg>
            </div>

            {
                arrowBtn.map((item, index) => {
                    const titleBtn = index + firstBtn;

                    return (
                        <Page
                            active={titleBtn === currentPage}
                            key={`${index}-key`}
                            pageNumberWidth={spreadRatio}
                            onClick={() => clickHandle(titleBtn)}
                        >
                            {titleBtn}
                        </Page>
                    );
                })
            }
            <div class="pagination__arrow"
                active={(firstBtn + finalAmountBtns - 1) !== count}
                rotate="left"
                onClick={() => clickHandle(count)}
            >
                <svg
                    fill="currentColor"
                    height="34"
                    viewBox="0 0 34 34"
                    width="34"
                >
                    <path d="M16 11L17.5 9.5L25 17L23.5 18.5L16 11Z" />
                    <path d="M23.5 15.5L25 17L17.5 24.5L16 23L23.5 15.5Z" />
                    <path d="M9.5 11L11 9.5L18.5 17L17 18.5L9.5 11Z" />
                    <path d="M17 15.5L18.5 17L11 24.5L9.5 23L17 15.5Z" />
                </svg>
            </div>
    </div>
</template>

<style scoped type='scss'>
.pagination {
  display: flex;
  margin: 20px 0;
  justify-content: center;
}

.container {
  display: flex;
  position: relative;
}

.double_arrow_left,
.double_arrow_right {
  position: absolute;
  top: 50%;
  transform: translateY(-55%);

  img {
    cursor: pointer;
    width: 20px;
    height: 100%;
  }
}

.double_arrow_left {
  left: -20px; 
}

.double_arrow_right {
  right: -20px;

  img {
    transform: rotate(180deg);
  }
}

.btn-primary {
  outline: none !important;
  background-color: white;
  color: black;
  border: 1px solid black;
  outline: none;

  &:hover {
    background-color: grey;
    color: white;
  }

  &:focus {
    background-color: grey !important;
  }
}

.currentBtn {
  background-color: grey;
  color: white;

  &:active {
    background-color: red !important;
  }    
}

.hidden {
  display: none;     
}
</style>