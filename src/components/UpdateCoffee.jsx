import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo };

        console.log(updatedCoffee);

        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                }
            });
    };
    
    return (
        <div className="h-screen md:mt-16">
            <form onSubmit={handleUpdateCoffee} className="max-w-7xl bg-[#F4F3F0] py-16 px-20 mx-auto rounded-xl shadow-md">
                <div className="flex flex-col items-center">
                    <h2 className="text-4xl font-extrabold text-gray-700 text-center mb-6">Update Coffee : {name}</h2>
                    <p className="md:w-[600px] text-center mb-8">
                        It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                        more-or-less normal distribution of letters, as opposed to using Content here.
                    </p>
                </div>

                {/* form row  */}
                <div className="md:flex justify-center items-center gap-10 text-base mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-base">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} className="input input-bordered join-item w-full" placeholder="Coffee Name" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-base">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" defaultValue={quantity} className="input input-bordered join-item w-full" placeholder="Available Quantity" />
                        </label>
                    </div>
                </div>

                {/* form supplier row  */}
                <div className="md:flex justify-center items-center gap-10 text-base mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-base">Supplier Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" defaultValue={supplier} className="input input-bordered join-item w-full" placeholder="Supplier Name" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-base">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" defaultValue={taste} className="input input-bordered join-item w-full" placeholder="Taste" />
                        </label>
                    </div>
                </div>

                {/* form category and details row  */}
                <div className="md:flex justify-center items-center gap-10 text-base mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-base">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" defaultValue={category} className="input input-bordered join-item w-full" placeholder="Category" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-base">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" defaultValue={details} className="input input-bordered join-item w-full" placeholder="Details" />
                        </label>
                    </div>
                </div>

                {/* form photo url row */}
                <div className="justify-center items-center gap-10 text-base mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-base">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={photo} className="input input-bordered join-item w-full" placeholder="Photo URL" />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Update Coffee" className="btn btn-neutral btn-block text-base" />
            </form>
        </div>
    );
};

export default UpdateCoffee;