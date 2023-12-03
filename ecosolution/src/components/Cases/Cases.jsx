.grid_container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
      "card1 card2"
      "card3 card4";
    gap: 24px;
  }
  
  .card1 { grid-area: card1; }
  .card2 { grid-area: card2; }
  .card3 { grid-area: card3; }
  .card4 { grid-area: card4; }
  .image1 { grid-area: image1; }
  .image2 { grid-area: image2; }
  
  @media (min-width: 768px) {
    .grid_container {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, auto);
      grid-template-areas:
        "card1 card2 image1"
        "image2 card3 card4 ";
    }
  
    .image1, .image2 {
        width: 100%;
        height: auto;
        object-fit: cover;
      grid-column: span 2; /* Изображение занимает место двух карточек */
     }
  }

  ////////
   {/* <div className={css.grid_container}>
        <div className={css.card1}><Card title='Openness' text='to the world, people, new ideas and projects'/></div>
        <div className={css.card2}><Card title='Responsibility' text='we are aware that the results of our work have an impact on our lives and the lives of future generations'/></div>
        <div className={css.card3}><Card title='Innovation' text='we use the latest technology to implement non-standard solutions'/></div>  
        <div className={css.card4}><Card title='Quality' text='we do not strive to be the first among others, but we want to be the best in our business'/></div>
        <img className={css.image1} src="../../images/workers.jpg" alt="workers at wind turbines"/>
        <img className={css.image2} src="../../images/man-worker-firld-by-solar-panels 1.jpg" alt="worker at solar panels"/>

      </div> */}


