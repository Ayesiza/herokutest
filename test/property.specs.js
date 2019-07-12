import express from 'express';
import request from 'supertest';
import should from 'should';
import apiRouter from '../app/routers/apiRouters';
const app = express()

app.use(express.json());

app.use('/api/v1/', apiRouter)
describe('Tests property routes', () => {
    let token = '';
    before((done) => {
        request(app)
            .post('/api/v1/users/auth/signin')
            .send({
                email: 'maira@gmail.com',
                password: 'maira',
            })
            .end((err, res) => {
                token = res.body.user.token;
                done();
            });
    });
    it('tests postPropertyAdvert', (done) => {
        request(app)
            .post('/api/v1/property')
            .set('Authorization', `Bearer ${token}`)
            .send({
                status: 'available',
                price: '768.90',
                state: 'kampala',
                city: 'kampala',
                address: 'avemaPark',
                type: 'miniflat',
                createdOn: '02092019'
            })
            .end((err, res) => {
                res.status.should.equal(201);
                res.body.property.should.have.property('price')
                res.body.property.should.have.property('type')
                res.body.property.should.have.property('address')
                done();
            });
    });
    it('tests updateProperty', (done) => {
        request(app)
            .patch('/api/v1/property/1')
            .set('Authorization', `Bearer ${token}`)
            .send({
                price: '968.90',
                type: 'miniflat',
            })
            .end((err, res) => {
                res.status.should.equal(201);
                res.body.property.should.have.property('price')
                res.body.property.should.have.property('type')
                res.body.property.should.have.property('address')
                done();
            });
    });

    it('tests updateProperty not found', (done) => {
        request(app)
            .patch('/api/v1/property/22')
            .set('Authorization', `Bearer ${token}`)
            .send({
                price: '968.90',
                type: 'miniflat',
            })
            .end((err, res) => {
                res.status.should.equal(404);
                done();
            });
    });
    it('tests markAsSold', (done) => {
        request(app)
            .patch('/api/v1/property/1/sold')
            .set('Authorization', `Bearer ${token}`)
            .send({
                status: 'sold'
            })
            .end((err, res) => {
                res.status.should.equal(201);
                res.body.property.should.have.property('price')
                res.body.property.should.have.property('type')
                res.body.property.should.have.property('address')
                done();
            });
    });
    it('tests markAsSold not found', (done) => {
        request(app)
            .patch('/api/v1/property/10/sold')
            .set('Authorization', `Bearer ${token}`)
            .send({
                status: 'sold'
            })
            .end((err, res) => {
                res.status.should.equal(404);
                done();
            });
    });

    it('tests allProperty', (done) => {
        request(app)
            .get('/api/v1/propertys')
            .set('Authorization', `Bearer ${token}`)
            .end((err, res) => {
                res.status.should.equal(200);
                res.body.status.should.equal(200);
                done();
            });
    });

    it('tests propertyType', (done) => {
        request(app)
            .get('/api/v1/propertys?type=3bedroom')
            .set('Authorization', `Bearer ${token}`)
            .end((err, res) => {
                res.status.should.equal(200)
                done();
            });
    });

    it('tests specificProperty', (done) => {
        request(app)
            .get('/api/v1/property/4')
            .set('Authorization', `Bearer ${token}`)
            .end((err, res) => {
                res.status.should.equal(200);
                done();
            });
    });
    it('tests specificProperty not found', (done) => {
        request(app)
            .get('/api/v1/property/9')
            .set('Authorization', `Bearer ${token}`)
            .end((err, res) => {
                res.status.should.equal(404);
                done();
            });
    });

    it('tests deleteAdvert', (done) => {
        request(app)
            .delete('/api/v1/property/1')
            .set('Authorization', `Bearer ${token}`)
            .set('Accept', 'application/json')
            .end((err, res) => {
                res.status.should.equal(200);
                res.body.message.should.equal('successfuly deleted')
                done();
            });
    });

    it('tests deleteAdvert if not found', (done) => {
        request(app)
            .delete('/api/v1/property/9')
            .set('Authorization', `Bearer ${token}`)
            .end((err, res) => {
                res.status.should.equal(404);
                done();
            });
    });

});