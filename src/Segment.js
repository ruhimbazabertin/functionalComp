import React from 'react';

const Segment = (props) => {

    return (
     <div class="ui placeholder segment">
    <div class="ui icon header">
    <i class="pdf file outline icon"></i>
        {props.children}
   </div>
   <div class="ui primary button">Add Document</div>
   </div>
    )
}

export default Segment;