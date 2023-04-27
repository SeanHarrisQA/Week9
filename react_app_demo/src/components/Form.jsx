const CatForm = () => {
    return (
    <form id="addCatForm">
        <label class="form-label" for="pName">Name:</label>
        <input class="form-control" type="text" name="pName" id="pName" required/>
        <br></br>
        <label class="form-label" for="pAge">Age:</label>
        <input class="form-control" type="number" name="pAge" id="pAge"/>
        <br></br>
        <label class="form-label" for="pJob">Image Src:</label>
        <input class="form-control" type="text" name="pJob" id="pJob"/>
        <br></br>
        <div class="mt-3">
            <button class="btn btn-primary" type="reset">Reset</button>
            <button class="btn btn-success" type="submit">Submit</button>
        </div>
    </form>
);}

export default CatForm;