// Justin, Joe

const client = require('./client_db');

// async function getAllMerchandise() {
//     const { rows: merchIds } = await client.query(`
//         SELECT merch_id FROM merchandise;
//     `)
//     console.log(merchIds);
//     const merchandise = await Promise.all(merchIds.map((item) => getMerchandiseById(item.merch_id)))

//     return merchandise;
// }

async function getAllMerchandise() {
    try {
        const { rows: products } = await client.query(`
        SELECT * FROM merchandise;
        `)

        return products;

    } catch (error) {
        throw error;
    }
}

async function getMerchandiseByCategory(category) {
    try {
        const { rows: products } = await client.query(`
        SELECT * FROM merchandise
        WHERE cats = $1;
        `, [category])

        return products;
        
    } catch (error) {
        throw error;
    }
}

async function getMerchandiseByName(merchName) {
    const { rows: [merchandise] } = await client.query(`
        SELECT * FROM merchandise
        WHERE name LIKE $1;
    `, [merchName]);

    return merchandise;
}

// async function searchMerchandise(searchTerm, category = '') {
//     console.log('Entered client.searchMerchandise', searchTerm, category);

//     const catSearch = category.length ? `"Catname"='${category}' AND ` : '';

//     console.log('category:', catSearch);
//     try {

//         const { rows: merchandise } = await client.query(`
//             SELECT * FROM merchandise
//             JOIN categories ON merchandise.cats=categories.cat_id
//             WHERE ${catSearch} (name LIKE '%${searchTerm}%' OR description LIKE '%${searchTerm}%');
            
//         `);

//         console.log('Successfully retrieved search!', merchandise);

//         return merchandise;

//     } catch (error) {
//         throw error;
//     }

// }

async function searchMerchandise(searchTerm, category = '') {
    console.log('Entered client.searchMerchandise', searchTerm, category);

    const catSearch = category.length ? `"Catname"='${category}' AND ` : '';

    console.log('category:', catSearch);
    try {

        const { rows: merchandise } = await client.query(`
            SELECT * FROM merchandise
            JOIN categories ON merchandise.cats=categories.cat_id
            WHERE ${catSearch} (name LIKE '%${searchTerm}%' OR description LIKE '%${searchTerm}%');
            
        `);

        console.log('Successfully retrieved search!', merchandise);

        return merchandise;

    } catch (error) {
        throw error;
    }

}

async function getMerchandiseById(merchId) {
    try {
        const { rows: [merchandise] } = await client.query(`
            SELECT * FROM merchandise
            WHERE merch_id = $1;
        `, [merchId]);

        const { rows: [reviews] } = await client.query(`
            SELECT * FROM reviews
            WHERE "merchId" = $1;
        `, [merchId])

        merchandise.reviews = reviews;

        return merchandise;
    } catch (error) {
        throw error;
    }

}

async function getMerchandiseByCategory(catId) {
    const { rows: merchandise } = await client.query(`
            SELECT * FROM merchandise
            WHERE cats = $1;
        `, [catId]);

    return merchandise;
}

async function getAllMerchandiseReviews(merchId) {
    const { rows: [merchandise] } = await client.query(`
            SELECT * FROM merchandise
            JOIN reviews ON merchandise.merch_id=reviews."merchId"
            WHERE merchId = $1;
        `, [merchId]);

    return merchandise;
}

async function getMerchandiseReviewByUserId(userId) {
    const { rows: [reviews] } = await client.query(`
        SELECT * FROM reviews
        WHERE author = ${userId};
        `);
}

async function updateMerchandise(itemId, fields = {}) {
    const queryString = Object.keys(fields).map((key, index) => {
        return `"${key}"=$${index + 1}`
    }).join(',');

    const { rows: [item] } = await client.query(`
        UPDATE merchandise
        SET ${queryString}
        WHERE merch_id = ${itemId}
        RETURNING *;
        `, Object.values(fields));
}

async function createMerchandiseReview(merchId, userId, rating, description) {

    console.log('Entered bd CreateMerchandiseReview:');
    try {
        const { rows: [review] } = await client.query(`
            INSERT INTO reviews("author", "merchId", rating, description)
            VALUES($1, $2, $3, $4)
            RETURNING *;
            `, [userId, merchId, rating, description]);

        return review;
    } catch (error) {

        throw error;
    }

}

async function addCategory(name) {
    try {

        console.log('entered addCategory with cat: ', name);
        const { rows: [category] } = await client.query(`
            INSERT INTO categories("Catname")
            VALUES('${name}')
            RETURNING *;
            `);

        return category;

    } catch (error) {
        throw error;
    }
}

async function createMerchandise({ img, name, artist, price, rating = 5, cat }) {

    try {

        console.log('Entered db createMerchandise');
        const { rows: [merchandise] } = await client.query(`
            INSERT INTO merchandise(img_url, name, artist, price, rating, cats)
            VALUES($1, $2, $3, $4, $5, $6)
            RETURNING *;
        `, [img, name, artist, price, rating, cat]);
        console.log('Successfully created merchandise');
        return merchandise;
    } catch (error) {
        throw error;
    }

}

async function deleteMerchandise(merchId) {
    try {
        const { rows: [merchandise] } = await client.query(`
            DELETE FROM merchandise
            WHERE merch_id=${merchId}
            RETURNING *;
            `)

        return merchandise;

    } catch (error) {
        throw error;
    }
}

//deleteMerchandiseReview(reviewId)
async function deleteMerchandiseReview(reviewId) {
    const { rows: [review] } = await client.query(`
            DELETE FROM reviews
            WHERE review_id=$1
            RETURNING *;
        `, [reviewId])
}

module.exports = {
    getAllMerchandise,
    getAllMerchandiseReviews,
    getMerchandiseByCategory,
    getMerchandiseById,
    getMerchandiseByName,
    getMerchandiseReviewByUserId,
    createMerchandise,
    updateMerchandise,
    createMerchandiseReview,
    addCategory,
    deleteMerchandise,
    deleteMerchandiseReview,
    addCategory,
    updateMerchandise,
    searchMerchandise
};